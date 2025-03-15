import React from "react";
import Components from "../menu/components";

function hiring_dy() {
    const data = {
        content: {
            body: [
                {
                    _uid: "w",
                    headline: "Regulatory Reporting Manager",
                    desc: "Part time role",
                    component: "foo",
                    long_desc: "The Jr. Agile Coach is critical to the success of Entrata’s Research and Development (R&D) department and is primarily responsible for elevating the performance of Entrata’s software development teams using Agile and Lean practices and systems thinking. This role reports directly to the Sr. Director of Organizational Effectiveness and has a broad range of responsibilities including building a highly collaborative learning organization by empowering teams and leadership to adopt the mindset and techniques needed to build high-performance teams and to meet business outcomes. This role will teach, train and mentor other Scrum Masters, as well as provide individual team coaching to uplevel the maturity and health of teams. The Agile Coach may function as a short-term dedicated Scrum Master for teams as needed and will help showcase the value of the Scrum Master to the organization to support expanding the Scrum Master program.",
                    button: "Apply for job",
                },
                
                {
                    _uid: "x",
                    headline: "Another headline 1",
                    desc: "Part time role",
                    component: "foo",
                    button: "Apply for job",
                },
                {
                    _uid: "y",
                    headline: "Another headline 2",
                    desc: "Part time role",
                    component: "foo",
                    button: "Apply for job",
                },
                {
                    _uid: "z",
                    headline: "Another headline 3",
                    desc: "Part time role",
                    component: "foo",
                    button: "Apply for job",
                },
            ],
        },
    };
    return (
        <>
            <div className="container">
                <h1 className="text-center">Explore opportunities</h1>
                {data.content.body.map((block) => Components(block))}
            </div>
        </>
    );
}

export default hiring_dy;
