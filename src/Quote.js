import React from "react";

class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.quote = props.quote;
        this.author = props.author;
    }
    render() {
        return (
            <div key={Math.random()} align="center">
                <blockquote>
                    <p>
                        {this.quote}
                    </p>
                    <p>-- {this.author}</p>
                </blockquote>
            </div>
        );

    }
}

export default Quote;