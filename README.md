# 💼 Sales Incentive Distribution System

> 🧠 **Philosophy:**  
> **"If the company’s growth is directly proportional to the agent’s growth, the agents will give their full effort for the company."**

This project implements a smart and fair system to distribute a company’s discount kitty among sales agents, encouraging performance, loyalty, and client impact.

---

## 🧠 Thought Process Behind the Implementation

When designing this system, my goal was to build a reward model that aligns the agent’s growth with the company’s growth. Instead of simply rewarding high numbers, the system emphasizes balanced contribution, loyalty, and real-world impact..

### Here's the logic I followed:

1. **🔄 Equal Distribution (30%)**  
   The first 30% of the total kitty amount is distributed equally among all agents. This base amount ensures everyone receives recognition.

2. **📈 Performance & Loyalty-Based Distribution (Remaining 70%)**  
   The rest of the amount is distributed based on:
   - **Performance Score**
   - **Seniority (Loyalty to the Company)**
   - **Target Achievement Percentage**
   - **Number of Clients Handled**

   These factors ensure we reward not just individual efficiency but overall **impact**.

   > 🧠 For example:  
   >If Agent A has a performance score of 95 but joined recently and handles 2 clients,
   and Agent B scores 80 but has been with the company for years and manages 10 clients —
   Agent B’s contribution is broader and more sustainable.
   This model balances short-term performance with long-term impact

---

## 🚀 How to Run the Project

To run this project locally:

1. **🧩 Prerequisite**  
   Make sure you have [Node.js](https://nodejs.org/) installed. You can check by running:

   ```bash
   node -v
   ```

2. **📦 Install Dependencies**

   In your project folder, run:

   ```bash
   npm install
   ```

3. **▶️ Start the Application**

   To run the program:

   ```bash
   npm start
   ```

   The app will begin processing and show the output in the terminal.

---

## ✍️ How to Provide Input

1. **📁 Location**  
   Inside the project folder, go to:

   ```
   /data/input.json
   ```

2. **📝 Format**  
   Provide your input in **JSON format**. You can replace the contents of `input.json` with your own custom data.

   ### ✅ Sample Structure:
   ```json
   {
     "siteKitty": 10000,
     "salesAgents": [
       {
         "id": "A1",
         "performanceScore": 90,
         "seniorityMonths": 15,
         "targetAchieved": true,
         "no_of_clients": 50
       }
     ]
   }
   ```

---

## 📤 How to View Output

After running the program:

1. **📺 Console Output**  
   The result will be displayed in your terminal or command-line interface.

2. **📁 Saved Output**  
   A JSON file containing the full result will also be saved to:

   ```
   /data/output.json
   ```

   You can open this file to review or use the data further.
