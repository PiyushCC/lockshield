import axios from 'axios';
import React,{Component, useState} from 'react';
import Button from 'react-bootstrap/Button';


class App extends Component {

	state = {

	// Initially, no file is selected
	selectedFile: null,
	thetext: null,
	murl: null,
	};


	async downloadFile() {
		const response = await fetch('http://127.0.0.1:5000/imag');
		const blob = await response.blob();
		const link = document.createElement('a');
		link.href = URL.createObjectURL(blob);
		link.download = "image.png";
		document.body.appendChild(link);
		link.click();
		link.remove();
	  }
	
	//   async genimage() {
	// 	const response = await fetch('http://127.0.0.1:5000/generate');
	// 	const blob = await response.blob();
	// 	const link = document.createElement('a');
	// 	link.href = URL.createObjectURL(blob);
	// 	link.download = "image.pdf";
	// 	document.body.appendChild(link);
	// 	link.click();
	// 	link.remove();
	// 	console.log(response);
	// 	this.setState({ selectedFile: response });
	//   }
	
	// On file select (from the pop up)
	onFileChange = event => {
	
	// Update the state
	this.setState({ selectedFile: event.target.files[0] })
	this.setState({murl: URL.createObjectURL(event.target.files[0])})
	
	};

	onTextChange = event => {
	
		// Update the state
		this.setState({ thetext: event.target.value });
		
		};

	
	
	// On file upload (click the upload button)
	onFileUpload = () => {
	
	// Create an object of formData
	const formData = new FormData();
	
	// Update the formData object
  formData.append("file", this.state.selectedFile);
  formData.append("plaintext", this.state.thetext);
	// formData.append(
	// 	"myFile",
	// 	this.state.selectedFile,
	// 	this.state.selectedFile.name
	// );
	
	// Details of the uploaded file
	console.log(this.state.selectedFile);
	
	// Request made to the backend api
	// Send formData object
	axios.post("http://127.0.0.1:5000/success", formData).then(
		(response)=> {
			console.log(response)
			// console.log(response);
			// var blob = new Blob([this.response['data']], {type: "application/pdf"});
			// var url = window.URL.createObjectURL(blob);
			// var link = document.createElement('a');
			// document.body.appendChild(link);
			// link.style = "display: none";
			// link.href = url;
			// link.download = "image.pdf";
			// link.click();
		}
	);
	};
	
	// File content to be displayed after
	// file upload is complete
	fileData = () => {
	
	if (this.state.selectedFile) {
		
		return (
		<div>
			<h2>File Details:</h2>
			<p>File Name: {this.state.selectedFile.name}</p>

			<p>File Type: {this.state.selectedFile.type}</p>

			<p>
			Last Modified:{" "}
			{this.state.selectedFile.lastModifiedDate.toDateString()}
			</p>

			<p>
				<img src={this.state.murl}></img>
			</p>

		</div>
		);
	} else {
		return (
		<div>
			<br />
			<h4>Choose before Pressing the Upload button</h4>
		</div>
		);
	}
	};
	
	render() {
	
	return (
		<div>
			<h1>
			Lockshield
			</h1>
			<h3>
			Upload your image and text which you want to hide.
			</h3>
			<div>
				<input class='inp1' type="file" onChange={this.onFileChange} />
				<br></br>
				<input class='inp2' type="text" onChange={this.onTextChange} placeholder='Enter secret message'/>
				<br />
				<button class='b2' onClick={this.onFileUpload}>
				Upload!
				</button>

				<button onClick={this.downloadFile}>
				Download!
				</button>
			</div>
		{this.fileData()}
		</div>
	);
	}
}

export default App;