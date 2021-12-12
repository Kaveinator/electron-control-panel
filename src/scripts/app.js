var App = {
    Start: () => {
        // nav
        let catergories = Object.keys(App.rendererData.navInfo),
            finalHtml = "";
        catergories.forEach(catName => {
            let catData = App.rendererData.navInfo[catName];
            finalHtml += "<div class=\"catergory\">" +
                         `<span class="title" onClick="this.parentNode.classList.toggle('hide');">${catName}<span class="channelUnreadCount">${catData.length}</span></span>`
            catData.forEach(channelData => {
                finalHtml += `<div class="channel" onclick="App.OnNavModuleClick(this);" icon-name="&#x${channelData.Icon}" panel-name="${channelData.Panel}">${channelData.Name}</div>`;
            });
            finalHtml += "</div>";
            App.UI.Dashboard.nav.innerHTML = finalHtml;
        });
    },
    UI: {
        LoginModule: {
            onSubmit: formObj => {
                let username = formObj.username.value,
                    password = formObj.password.value;
                
                return false;
            }
        },
        Dashboard: {
            welcomeText: document.querySelector(".serverHeader"),
            nav: document.querySelector(".serverContent"),
            header: {
                name: document.querySelector(".channelName"),
                notifsButton: document.querySelector(".notifCount")
            },
            content: document.querySelector(".channelContent"),
            contentErrorPanel: document.querySelector(".ModuleUnloadedWarn")
        }
    },
    rendererData: {
        navInfo: {
            "Dashboard": [
                { Icon: "f015", Name: "Overview", Panel: "OverviewPanel" },
                { Icon: "f200", Name: "System Status", Panel: "SystemStatusPanel" },
                { Icon: "f550", Name: "Audit Log", Panel: "AuditLogPanel" },
                { Icon: "f0a0", Name: "Onboard GS", Panel: "OnboardGSPanel" },
                { Icon: "f201", Name: "Analytics", Panel: "AnalyticsPanel" }
            ],
            "Administrative": [
                { Icon: "f0ad", Name: "Configuration", Panel: "ConfigPanel" },
                { Icon: "f4fe", Name: "User Management", Panel: "UserManagementPanel" },
                { Icon: "f505", Name: "Clan Management", Panel: "ClanManagementPanel" },
                { Icon: "f085", Name: "Server Management", Panel: "ServerManagementPanel" },
                { Icon: "f120", Name: "Terminal", Panel: "TerminalPanel" },
                { Icon: "f07b", Name: "System Logs", Panel: "SystemLogsPanel" }
            ]
        }
    },
    OnNavModuleClick: sender => {
        document.body.classList.add("hideNav");
        // Get previous active nav
        let prevNav = App.UI.Dashboard.nav.querySelector(".channel.active");
        if (prevNav)
            prevNav.classList.remove("active");
        
        sender.classList.add("active");

        // Set title
        App.UI.Dashboard.header.name.innerText = sender.innerText;
        App.UI.Dashboard.header.name.setAttribute("icon-name", sender.getAttribute("icon-name"))

        // Remove prev panel
        let prevPanel = App.UI.Dashboard.content.querySelector(".CPPanel.show");
        if (prevPanel)
        prevPanel.classList.remove("show");
        
        // Set panel
        let currentPanel = App.UI.Dashboard.content.querySelector(`#${sender.getAttribute("panel-name")}`);
        // if no panel set no module found panel
        if (currentPanel) {
            App.UI.Dashboard.contentErrorPanel.classList.remove("show");
            currentPanel.classList.add("show");
        } else App.UI.Dashboard.contentErrorPanel.classList.add("show");


    },
    SetContent: (icon, title, body) => {
        
    }
};

document.onload = App.Start();