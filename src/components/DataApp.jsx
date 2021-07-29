import React from "react";
//import requests from "requests";


class DataApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentWillMount() {
        fetch('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/508d307b-5e60-4bdc-b634-0a6a58c46242/preguntas.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210726T060509Z&X-Amz-Expires=86400&X-Amz-Signature=77298147b57b6412804c432606d71f6f65df5ccbd93ab7da7ce7269fb4bc4b75&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22preguntas.json%22')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log("data", data)
                this.setState({ data: data })
            })
    }

    render() {
        if (this.state.data.length > 0) {
            return (
                <div className="container-fluid">
                    <p>DAta</p>
                </div>
            )
        } else {
            return <p className="text-center">Cargando data...</p>
        }
    }
}

export default DataApp;