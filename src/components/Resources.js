import React from 'react';
import YouTubeEmbed from "./YoutubeEmbed";

function Resources() {
    return (
        <div className="resources-page">
            <h1>More Resources</h1>
            <p>Explore more about sustainable practices and how you can make a difference:</p>
            <ul>
                <li><a href="https://www.iea.org/reports/fossil-fuels-consumption-subsidies-2022">Fossil Fuels Consumption Subsidies 2022 – Analysis</a></li>
                <li><a href="https://sdgs.un.org/goals/goal12">UN Sustainable Development Goal 12</a></li>
                <li>And more...</li>
            </ul>
            <YouTubeEmbed embedId="dn-hLQk49eA" />
        </div>
        
    );
}

export default Resources;