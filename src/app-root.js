import { Calendar } from '@fullcalendar/core';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';

import commonStyles from '@fullcalendar/common/main.css';
import dayGridStyles from '@fullcalendar/daygrid/main.css';
import timelineStyles from '@fullcalendar/timeline/main.css';
import resourceTimelineStyles from '@fullcalendar/resource-timeline/main.css';

export class AppRoot extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <style>${commonStyles}</style>
            <style>${dayGridStyles}</style>    
            <style>${timelineStyles}</style>
            <style>${resourceTimelineStyles}</style>
            <style>
                #calendar {
                    width: 50%;
                }
            </style>
            <div id="calendar"></div>
        `;

        const calendarEl = document.getElementById('calendar');
        const calendar = new Calendar(calendarEl, {
            plugins: [resourceTimelinePlugin],
            initialView: 'resourceTimelineWeek'
        });

        calendar.render();
    }
}

customElements.define("app-root", AppRoot);