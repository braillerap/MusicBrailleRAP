
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { injectIntl } from 'react-intl';
import { eel } from "../eel.js";

class MusicXml extends React.Component {
    
    constructor(props) {

      super(props);
      
      this.fileopen = null;
      this.state = {
        txt: this.props.src
        
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleclick =this.handleclick.bind(this);
      this.handlechangefile = this.handlechangefile.bind(this);
    }

    handleSubmit(event) 
    {
      
    }
    handlechangefile(event)
    {
        
    }

    
    async handleclick(event)
    {
        event.preventDefault();
        let ret = await eel.get_file_dialog ()();
        console.log (ret);
        let data = JSON.parse(ret);
        console.log (data);
        //for (let i = 0; i < ret.length; i++)
        this.props.textcb(data);
        this.setState({txt: data});
    }
    handleChange(event) 
    {
      //console.log (event.target.value)
      this.setState({txt: event.target.value});
      this.props.textcb (event.target.value);
    }
    componentDidMount ()
    {
      if (this.props.focusref)
        this.props.focusref.current.focus ();
    }
    render ()
    {
      //console.log (this.props.options);
      if (! this.props.options)
      {
        return (
        <div aria-label='Formulaire de saisie du texte'>
        
        <h1 aria-label='Formulaire de saisie du texte'>
          
          <FormattedMessage id="input.title" defaultMessage="Saisie du texte"/>
          </h1>
        
        <form onSubmit={this.handleSubmit} >
          <textarea  aria-label={this.props.intl.formatMessage({id:"input.text_aria"})} 
            value={this.state.txt} onChange={this.handleChange} 
            rows={21} cols={27} className="BrailleInput">{this.state.txt}</textarea>
      
        </form>
        </div>
      );
      
    
      }
      else
      return (
            <div >
              
              <form onSubmit={this.handleSubmit} >
                <h1 aria-atomic={true}>
                  
                  
                  <FormattedMessage id="input.title2" defaultMessage="Importer un fichier MusicXML"/>
                  </h1>  
                  <div>
                <button onClick={this.handleclick} className="pure-button pad-button" ref={this.props.focusref}>{this.props.intl.formatMessage({id:"input.loadfile"})}</button>
                </div>
                <input type="file" id="file" ref="fileUploader" accept='*.mxl' style={{display: "none"}} onChange={this.handlechangefile}/>
                
                <h3>{this.props.intl.formatMessage({id:"input.preview"})}</h3>
                <textarea readOnly aria-label={this.props.intl.formatMessage({id:"input.text_aria"})}
                  value={this.state.txt} 
                  onChange={this.handleChange} 
                  rows={this.props.options.nbline} 
                  cols={this.props.options.nbcol} 
                  
                  className="BrailleInput">{this.state.txt}</textarea>
                  
              </form>
          </div>
        );
    }
  }
  
  export default injectIntl(MusicXml);