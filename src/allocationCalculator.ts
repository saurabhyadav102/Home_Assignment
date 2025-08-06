import { SalesAgent, Allocation } from "./types";
import { normalize } from "./normalizer";
import { generateJustification } from "./justification";

const weights = {
  performanceScore: 0.4,
  seniorityMonths: 0.3,
  targetsAchievedClientCount: 0.3,
};

export function calculateAllocations(kitty: number, agents: SalesAgent[]): Allocation[] {
  const MIN_BASE = (kitty * 3) / 10;
  const bonusPool = kitty - MIN_BASE;

  const metrics = {
    performanceScore: normalize(agents.map((a) => a.performanceScore)),
    seniorityMonths: normalize(agents.map((a) => a.seniorityMonths)),
    targetsAchievedClientCount: normalize(
      agents.map((a) => (a.targetAchievedPercent * a.activeClients) / 100)
    ),
  };

  const scores = agents.map((_, i) => {
    return (
      metrics.performanceScore[i]! * weights.performanceScore +
      metrics.seniorityMonths[i]! * weights.seniorityMonths +
      metrics.targetsAchievedClientCount[i]! * weights.targetsAchievedClientCount
    );
  });

  const totalScore = scores.reduce((a, b) => a + b, 0);

  return agents.map((agent, i) => {
    const bonus = bonusPool * (scores[i]! / totalScore);
    const assigned = Math.round(bonus + MIN_BASE / agents.length);

    return {
      id: agent.id,
      assignedDiscount: assigned,
      justification: generateJustification(agent),
    };
  });
}
