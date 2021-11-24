import { useState } from "react";
import "./App.css";
import crypto from "crypto-js";

function App() {
  const [text, setText] = useState("");
  const [cypher, setCypher] = useState("")
  const [decypher, setDecypher] = useState("")


  const cypherText = () => {
    const textCypher = crypto.AES.encrypt(text, "@privatesecret").toString();
    setCypher(textCypher);
    const bytes = crypto.AES.decrypt(textCypher, "@privatesecret")
    const textDecypher = bytes.toString(crypto.enc.Utf8)
    setDecypher(textDecypher)
  };

  return (
    <div className="py-5">
      <div className="container">
        <div className="row hidden-md-up">
          <div className="col-md-6">
            <div className="card">
              <div className="card-block p-3">
                <h4 className="card-title">Input</h4>
                <div className="mb-3">
                  <label className="form-label">
                    Texto para cifrar
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setText(e.target.value)}
                  ></input>
                  <button
                    className="btn btn-primary mt-2"
                    onClick={cypherText}
                  >
                    Cifrar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-block p-3">
                <h4 className="card-title">Output</h4>
                <div className="mb-3">
                  <label className="form-label">
                    Text cipher : {cypher}
                  </label>
                  <br/>
                  <label className="form-label">
                    Text decipher : {decypher}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
