import ChatBot from "react-chatbotify";
import "./App.css";

function App() {
  const options = {
    // ...other configurations
    headerStyle: {
      background: "#42b0c5",
      color: "#ffffff",
      padding: "10px",
    },
    chatWindowStyle: {
      backgroundColor: "#f2f2f2",
    },
    header: {
      title: <h3 style={{ cursor: "pointer", margin: 0 }}>Jupiter Bot</h3>,
    },
    footer: {
      text: (
        <div style={{ cursor: "pointer" }}>
          <span>Powered By </span>
          <span style={{ fontWeight: "bold" }}>
            <span> Deloitte</span>
          </span>
        </div>
      ),
    },
  };

  const flow = {
    start: {
      message: "Hi Ramesh!",
      path: "step2",
    },
    step2: {
      message: "How are you doing today? What can I help you with?",
      options: [
        "Opportunity Insights",
        "Opportunity Tagging",
        "Marketing Campaign Tagging",
        "Reports & Insights",
        "Create New Opportunity",
        "Market Overview and News",
      ],
      path: "step3",
    },
    step3: {
      message:
        "Here's a quick look at the summary of your opportunity watchlist:",
      transition: { duration: 1000 },
      path: "step4",
    },
    step4: {
      message:
        "Boeing – HRT Transformation moved from Identified stage to Contacted ( Value - $500,0000)",
      transition: { duration: 1000 },

      path: "step5",
    },
    step5: {
      message:
        "Walmart – SAP Implementation opportunity expected close date is tomorrow.",
      transition: { duration: 1000 },
      path: "step6",
    },
    step6: {
      message:
        "Do you want to know the market overview or opportunity news now?",
      options: ["Yes", "No"],
    },
  };
  return (
    <>
      <ChatBot flow={flow} options={options} />
    </>
  );
}

export default App;
