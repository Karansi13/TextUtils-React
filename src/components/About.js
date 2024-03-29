import React from 'react'

export default function About({mode}) {

    // const [myStyle,setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    let myStyle = {
        color : mode === 'dark'?'white':'black',
        backgroundColor: mode === 'dark'?'rgb(36 74 104)':'white',
        // border: '1px solid',
        // borderColor: mode === 'dark'?'white':'dark'
    }
    

  return (
        <div className="container"  >
        <h1 className="my-3 " style={{color : mode === 'dark'?'white':'black'}}>About us</h1>
        <div className="accordion" id="accordionExample">
    <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header">
        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           <strong>Analyse your text</strong>

        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            <p>TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count.</p>
        </div>
        </div>
    </div>
    <div className="accordion-item " style={myStyle}>
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong>

        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            <p>TextUtils is a free character tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.</p>
        </div>
        </div>
    </div>
    <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser Compatible</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            <p>This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, excel document, pdf document, essays, etc.</p>
        </div>
        </div>
    </div>
    </div>
    </div>
  )
}
