import * as React from "react";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";
import { Chart, ChartProps } from "../Chart";
import { RadarType } from "./RadarType";

export interface RadarChartProps extends ChartProps {
    Data: Array<object>,
    RadarTypes: Array<RadarType>
}

export class CustomRadarChart<Props extends RadarChartProps> 
extends Chart<Props & RadarChartProps> {

	constructor(props: Props & RadarChartProps) {
        super(props);
        
		this.props.CssClass.push("RadarChart-React");
    }

	render() {
        return (
            <div
                id={this.GetOwnContainerId()}
                className="RadarChart-React"
            >
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={this.props.Data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="Subject" />
                        <PolarRadiusAxis />
                        {
                            this.props.RadarTypes.map((radarType) => {
                                return (
                                    <Radar 
                                        name={radarType.Name} 
                                        dataKey={radarType.DataKey} 
                                        stroke={radarType.StrokeColor} 
                                        fill={radarType.FillColor} 
                                        fillOpacity={0.6}/>
                                );
                            })
                        }
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        );
	}
}