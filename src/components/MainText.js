import React, { Component } from 'react'
import './MainText.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'


class MainText extends Component {
    render() {
        var TxtRotate = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
          };
          
          TxtRotate.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];
          
            if (this.isDeleting) {
              this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
              this.txt = fullTxt.substring(0, this.txt.length + 1);
            }
          
            this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
          
            var that = this;
            var delta = 200 - Math.random() * 100;
          
            if (this.isDeleting) { delta /= 2; }
          
            if (!this.isDeleting && this.txt === fullTxt) {
              delta = this.period;
              this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
              this.isDeleting = false;
              this.loopNum++;
              delta = 100;
            }
          
            setTimeout(function() {
              that.tick();
            }, delta);
          };
          
          window.onload = function() {
            var elements = document.getElementsByClassName('txt-rotate');
            for (var i=0; i<elements.length; i++) {
              var toRotate = elements[i].getAttribute('data-rotate');
              var period = elements[i].getAttribute('data-period');
              if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
              }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
            document.body.appendChild(css);
          };

          const element = <FontAwesomeIcon icon={faDownload} />
        return (
            <div className="intro">
                <p className="hello">Hello, my name is</p>
                <h1>Aleksandra Gjurova</h1>
                <p className="list">And I am &nbsp;
                    <span
                        class="txt-rotate"
                        data-period="2000"
                        data-rotate='["a Front-End Developer.", "an Architect.", "a Web Designer.", "a Coder.", "a Team Player." ]'>
                    </span>
                </p>
                <button className="cv"> Download CV {element}</button>
            </div>
        )
    }
}

export default MainText
