import { SalesAgent } from "./types.js";

export function generateJustification(agent: SalesAgent): string {
  const justification = [];

  if (agent.performanceScore >= 85)
    justification.push("high performance");

  if (agent.seniorityMonths >= 12)
    justification.push("long-term loyalty");

  if (agent.targetAchievedPercent >= 75 && agent.activeClients >= 8) {
    justification.push("achieved targets while handling many clients");
  } else if (agent.targetAchievedPercent >= 75) {
    justification.push("strong target achievement");
  } else if (agent.activeClients >= 8) {
    justification.push("handled many clients");
  }

  return justification.length
    ? `Received this amount due to ${justification.join(", ")}.`
    : "Received this amount due to consistent contribution.";
}
