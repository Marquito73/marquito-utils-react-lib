import * as React from "react";

/**
 * Main components properties
 * */
export interface ComponentProps {
	ContainerId: string,
	Id: string,
	CssClass: Array<string>,
	Attributes: Map<string, string>,
	Events: Map<string, string>
}

/**
 * Main component class
 * */
export default abstract class Component<Props extends ComponentProps>
	extends React.Component<Props & ComponentProps, {}> {

	LogProperties = () => {
		console.table(this.props);
    }
}