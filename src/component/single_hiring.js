import React from "react";
import Components from "../menu/components";
function Single_hiring() {

    const data = {
        content: {
            body: [
                {
                    id: "1",
                    headline: "Regulatory Ranager",
                    desc: "Part time role",
                    component: "bar",
                    long_desc: "The Jr. Agile Coach is critical to the success of Entrata’s Research and Development (R&D) department and is primarily responsible for elevating the performance of Entrata’s software development teams using Agile and Lean practices and systems thinking. This role reports directly to the Sr. Director of Organizational Effectiveness and has a broad range of responsibilities including building a highly collaborative learning organization by empowering teams and leadership to adopt the mindset and techniques needed to build high-performance teams and to meet business outcomes. This role will teach, train and mentor other Scrum Masters, as well as provide individual team coaching to uplevel the maturity and health of teams. The Agile Coach may function as a short-term dedicated Scrum Master for teams as needed and will help showcase the value of the Scrum Master to the organization to support expanding the Scrum Master program.",
                    role: "Function as a dedicated Scrum Master to one or two teams, and provide targeted intervention to other teams as needed",
                    button: "Ban",
                    responn: "dffhfghfghfd edicated Scrum Master to one or two teams, and provide targeted intervention to other tea",
                    qual: "dfhgf"
                
                },
                {
                    id: "2",
                    headline: "Regulatory Ranager",
                    desc: "Part time role",
                    component: "bar",
                    long_desc: "The Jr. Agile Coach is critical to the success of Entrata’s Research and Development (R&D) department and is primarily responsible for elevating the performance of Entrata’s software development teams using Agile and Lean practices and systems thinking. This role reports directly to the Sr. Director of Organizational Effectiveness and has a broad range of responsibilities including building a highly collaborative learning organization by empowering teams and leadership to adopt the mindset and techniques needed to build high-performance teams and to meet business outcomes. This role will teach, train and mentor other Scrum Masters, as well as provide individual team coaching to uplevel the maturity and health of teams. The Agile Coach may function as a short-term dedicated Scrum Master for teams as needed and will help showcase the value of the Scrum Master to the organization to support expanding the Scrum Master program.",
                    role: "Function as a dedicated Scrum Master to one or two teams, and provide targeted intervention to other teams as needed",
                    button: "Ban",
                    responn: "dffhfghfghfd edicated Scrum Master to one or two teams, and provide targeted intervention to other tea",
                    qual: "dfgdfgdfgfd"
                
                },
               
            ],
        },
    };

    return (
        <>
            <div className="container">
                <h1 className="text-center">Explore Opportunities</h1>
                {data.content.body.map((block) => Components(block))}
            </div>
        </>
    );
}

export default Single_hiring;
