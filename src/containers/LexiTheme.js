import React, { Component } from 'react';

class LexiTheme extends Component {
    render() {
        return (
            <div>
                <MainNavigation />
                <Header />
                <div className="container">
                    <div className="row">
                        {this.props.children}
                        <Sidebar />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}