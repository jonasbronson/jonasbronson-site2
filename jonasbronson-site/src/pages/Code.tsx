import React from "react";
import JS from "../assets/code/js.png";
import CSharp from "../assets/code/cSharp.png";
import CPlusPlus from "../assets/code/cPlusPlus.png";

export default function Code(){
    return(
        <>
            <div style={{margin: "10%"}}>
                <h1 className="videoTitle"><span>Coding</span> Portfolio</h1>
                <div style={{marginBottom: "15%"}}>
                    <h2 className="genH2">My Projects</h2>
                    <div style={{display: "flex"}}>
                        <div>
                            <h3 className="genH3">|mobile app|</h3>
                            <p className="genP">insert description</p>
                        </div>
                    </div>
                    <div style={{display: "flex"}}>
                        <div>
                            <h3 className="genH3">CIS 300 Projects</h3>
                            <p className="genP">Projects using C# and the .NET framework. These projects use 
                                algorithms and data structures and include sorting algorithms, path finders, and 
                                hash functions. See more on my <a href="https://github.com/jonasbronson" style={{textDecoration: "none", color: "#3879cf"}}>GitHub</a>.
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{marginBottom: "15%"}}>
                    <h2 className="genH2">My Languages</h2>
                    <div className="codeLanguagesDiv">
                        <img className="codeLanguages codeLanguagesJava" src={JS}/>
                        <img className="codeLanguages" src={CPlusPlus}/>
                        <img className="codeLanguages" src={CSharp}/>
                    </div>
                    <div>
                        <h3 className="genH3">Plus some experience in</h3>
                        <ul style={{translate: "-37px"}}>
                            <li className="genP codeList">Python</li>
                            <li className="genP codeList">HTML + CSS</li>
                            <li className="genP codeList">Java</li>
                            <li className="genP codeList">SQL</li>
                        </ul>
                    </div>
                </div>
                <div style={{marginBottom: "15%"}}>
                    <h2 className="genH2">My Education</h2>
                    <div className="codeEducationDiv">
                        <div className="codeTimelineDiv">
                            <div className="codeTimelineDot codeComplete"/>
                            <div className="codeTimelineLine codeComplete"/>
                            <div className="codeTimelineDot codeComplete"/>
                            <div className="codeTimelineLine codeTimelineLineHalf codeComplete"/>
                            <div className="codeTimelineLine codeTimelineLineHalf"/>
                            <div className="codeTimelineDot"/>
                            <div className="codeTimelineLine"/>
                            <div className="codeTimelineDot"/>
                            <div className="codeTimelineLine"/>
                            <div className="codeTimelineDot"/>
                        </div>
                        <div className="codeEducationTextDiv">
                            <div>
                                <h3 className="genH3">Completed</h3>
                                <ul style={{translate: "-37px"}}>
                                    <li className="genP codeList">Data Structures and Algorithms</li>
                                    <li className="genP codeList">Object Oriented Design</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="genH3">In Progress</h3>
                                <ul style={{translate: "-37px"}}>
                                    <li className="genP codeList">Software Architecture and Design</li>
                                    <li className="genP codeList">Database Systems</li>
                                    <li className="genP codeList">Cryptography</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}