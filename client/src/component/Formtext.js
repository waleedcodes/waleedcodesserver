import React, { useState } from "react";
import PropTypes from 'prop-types'

export default function Formtext ( props ) {

  const [text, setText] = useState( "Drop Down Your Text" );

  const handleUpClick = () => {
    // console.log("Upper case was Click" + text);
    let newText = text.toUpperCase();
    setText( newText );
    props.showAlert( " Convert into Uppper Case ", "success" )
    document.title = ' TextUtils - Uppper Case ';
  };

  // *****************  //

  const handleDwClick = () => {
    // console.log("Lower case was Click" + text);
    let newText = text.toLowerCase();
    setText( newText );
    props.showAlert( " Convert into Lower Case ", "success" );
    document.title = ' TextUtils - Lower Case ';

  };

  // *****************  //

  const handleClearClick = () => {
    let newText = " ";
    setText( newText );
    props.showAlert( " All Text Clear ", "success" );
    document.title = ' TextUtils - Clear ';

  };

  // *****************  //

  const handleCopy = () => {
    let text = document.getElementById( "mybox" );
    text.select();
    navigator.clipboard.writeText( text.value );
    props.showAlert( " Text Copied! ", "success" );
    document.title = ' TextUtils - Copy ';
  };

  // *****************  //

  const handleRemover = () => {
    let newText = text.split( /[ ]+/ )
    setText( newText.join( " " ) )
    props.showAlert( " Remove All Extra Spaces ", "success" );
    document.title = ' TextUtils - Remove Space ';
  };

  // *****************  //

  const handleUpper = () => {
    const arr = text.split( " " );
    for ( var i = 0; i < arr.length; i++ ) {
      arr[i] = arr[i].charAt( 0 ).toUpperCase() + arr[i].slice( 1 );
    }
    const str2 = arr.join( " " );
    setText( str2 );
    props.showAlert( " Convert into All First letter Captialized ", "success" );
    document.title = ' TextUtils - Captialized';

  }

  // *****************  //

  const handleNumber = () => {

    const fromCharCodes = text
      .toString() // convert to string, ignore this if it's already a string
      .split( '' ) // split to array
      .map( x => +x + 97 ) // convert to char code number
    const answer = String.fromCharCode( ...fromCharCodes );
    setText( answer );
    props.showAlert( " Convert Number into Alphabets", "success" );
    document.title = ' TextUtils - Number Convertor';
  }
  // *****************  //

  function download ( file, text ) {

    var element = document.createElement( 'a' );
    element.setAttribute( 'href',
      'data:text/plain;charset=utf-8, '
      + encodeURIComponent( text ) );
    element.setAttribute( 'download', file );
    document.body.appendChild( element );
    element.click();
    document.body.removeChild( element );
  }
  // Start file download.

  const handleDownload = () => {
    var text = document.getElementById( "mybox" ).value;
    var filename = "GFG.txt";

    download( filename, text );
    props.showAlert( " Downloaded All Text", "success" );
    document.title = ' TextUtils - Download Text';
  }
  // *****************  //

  const handleOnChange = ( event ) => {
    setText( event.target.value );
  };

  return (
    <>
      <div className="mb-3 container">
        <div className="mt-4 text-center">
          <label className={`form-label fs-3 fw-bold text-${ props.mode === 'dark' ? 'white' : 'dark' }`}>
            Please Enter Your Text
          </label>
          <textarea
            className={"form-control mt-4"}
            style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
            id="mybox"
            value={text}
            onChange={handleOnChange}
            rows="9"
            placeholder="Drop Your Text ....."
          ></textarea>
          <div className="mt-5 text-center d-flex">
            <button
              className="btn btn-primary"
              onClick={handleUpClick}
            >
              All Uppercase
            </button>
            <button
              className="btn btn-info ms-3"
              onClick={handleDwClick}
            >
              All Lowercase
            </button>
            <button
              className="btn btn-success ms-3"
              onClick={handleClearClick}
            >
              Clear
            </button>
            <button
              className="btn btn-info ms-3"
              onClick={handleCopy}
            >
              Copy Text
            </button>
            <button
              className="btn btn-warning ms-3"
              onClick={handleRemover}
            >
              Remove Spaces
            </button>
            <button
              className="btn btn-primary ms-3"
              onClick={handleUpper}
            >
              Captialized
            </button>
            <button
              className="btn btn-danger ms-3"
              onClick={handleNumber}
            >
              Num into Alphabet
            </button>

            <button type="button" id="btn"
              value="Download" onClick={handleDownload} className="btn btn-success ms-3"> Download Text</button>
          </div>
        </div>

      </div>
      <div className="mt-3 py-3 container text-center" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
        <div className="row align-items-center">
          <div className="col-md-4">
            <h3>Your text Summary</h3>
          </div>
          <div className="col-md-3">
            <p >
              {text.split( ' ' )
                .filter( function ( n ) { return n !== '' } )
                .length} words and {text.length} Characters
            </p>
            <h6>
              {0.008 * text.split( " " ).length} Minutes
            </h6>
          </div>
          <div className="col-md-4">
            <h3>Preview</h3>
            <p>{text}</p>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  );
}
