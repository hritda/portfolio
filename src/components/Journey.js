import React, { useEffect } from 'react';

import "../components/JourneyStyles.css";
import TimeCard from './TimeCard';
const Journey = () => {


  useEffect(() => {
    const line = document.querySelector(".timeline-innerline");
    let i2 = 0;
    let i = 0;
    let target1 = document.querySelector(".timeline ul");
    let target2 = document.querySelectorAll(".timeline ul li");
    const timeline_events = document.querySelectorAll(".timeline ul li");

    function showTime(e) {
      if (e) {
        e.setAttribute("done", "true");
        e.querySelector(".timeline-point").style.background = "#e60073";
        e.querySelector(".date").style.opacity = "100%";
        e.querySelector(".timeCard").style.opacity = "100%";
        e.querySelector(".timeCard").style.transform = "translateY(0px)";
      }
    }
    function hideTime(e) {
      e.removeAttribute("done");
      e.querySelector(".timeline-point").style.background = "white";
      e.querySelector(".date").style.opacity = "0%";
      e.querySelector(".timeCard").style.opacity = "0%";
      e.querySelector(".timeCard").style.transform = "translateY(-10px)";
    }

    function slowLoop() {
      setTimeout(function () {
        showTime(timeline_events[i]);
        //line.style.width = `${((i + 1) / timeline_events.length) * 100}%`;
        timelineProgress(i + 1);
        i++;
        if (i < timeline_events.length) {
          slowLoop();
        }
      }, 800);
    }

    function timelineProgress(value) {
      let progress = `${((value) / timeline_events.length) * 100}%`;
      if (window.matchMedia("(min-width: 728px)").matches) {
        line.style.width = progress;
        line.style.height = "4px";
      } else {
        line.style.height = progress;
        line.style.width = "4px";
      }
    }

    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.9) {
          if (window.matchMedia("(min-width: 728px)").matches) {
            slowLoop();
          } else {
            showTime(entry.target);
            timelineProgress(i2);
            i2++;
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 1, rootMargin: "0px 0px -50px 0px" });


    if (window.matchMedia("(min-width: 728px)").matches) {
      observer.observe(target1);
    } else {
      target2.forEach((t) => {
        observer.observe(t);
      });
    }

    timeline_events.forEach((li, index) => {
      li.addEventListener("click", () => {
        if (li.getAttribute("done")) {
          timelineProgress(index);
          //hide all the timeline events from last upto the point clicked
          timeline_events.forEach((ev, idx) => {
            if (idx >= index) {
              hideTime(ev);
            }
          });
        }
        else {
          timelineProgress(index + 1);
          timeline_events.forEach((ev, idx) => {
            if (idx <= index) {
              showTime(ev);
            }
          });
        }
      });
    });

    var doit;
    window.addEventListener("resize", () => {
      clearTimeout(doit);
      doit = setTimeout(resizeEnd, 1200);
    });

    function resizeEnd() {
      i = 0;
      slowLoop();
    }

    // let target = document.querySelector(".timeline ul");
    // observer.observe(target)
  }, [])

  return (
    <div className="q-container">
      <h1>Journey</h1>
      <section className="timeline">
        <div className="timeline-line">
          <span className="timeline-innerline"></span>
        </div>
        <ul>
          <li>
            <span className="timeline-point"></span>
            <span className="date">2017</span>
            <div className="timeCard"><TimeCard title='HSC 12th' description='Studied from PACE Junior Science College (Dadar)' />
            </div>
          </li>
          <li>
            <span className="timeline-point"></span>
            <span className="date">2019</span>
            <div className="timeCard"><TimeCard title='B.Tech (Computer Engineering)' description='Studied from D J Sanghvi College. Passed with aggregate CGPA of 8.99' />
            </div>
          </li>
          <li>
            <span className="timeline-point"></span>
            <span className="date">2023</span>
            <div className="timeCard"><TimeCard title='Junior Reference Database Developer' description='Worked at Interactive Brokers' />
            </div>
          </li>

        </ul>
      </section>


    </div>
  )
}

export default Journey