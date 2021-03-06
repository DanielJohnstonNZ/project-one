import * as React from "react";

import {Peer} from "../models";

const userIcon: string = "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4Mi45IDQ4Mi45IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODIuOSA0ODIuOTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yMzkuNywyNjAuMmMwLjUsMCwxLDAsMS42LDBjMC4yLDAsMC40LDAsMC42LDBjMC4zLDAsMC43LDAsMSwwYzI5LjMtMC41LDUzLTEwLjgsNzAuNS0zMC41ICAgIGMzOC41LTQzLjQsMzIuMS0xMTcuOCwzMS40LTEyNC45Yy0yLjUtNTMuMy0yNy43LTc4LjgtNDguNS05MC43QzI4MC44LDUuMiwyNjIuNywwLjQsMjQyLjUsMGgtMC43Yy0wLjEsMC0wLjMsMC0wLjQsMGgtMC42ICAgIGMtMTEuMSwwLTMyLjksMS44LTUzLjgsMTMuN2MtMjEsMTEuOS00Ni42LDM3LjQtNDkuMSw5MS4xYy0wLjcsNy4xLTcuMSw4MS41LDMxLjQsMTI0LjlDMTg2LjcsMjQ5LjQsMjEwLjQsMjU5LjcsMjM5LjcsMjYwLjJ6ICAgICBNMTY0LjYsMTA3LjNjMC0wLjMsMC4xLTAuNiwwLjEtMC44YzMuMy03MS43LDU0LjItNzkuNCw3Ni03OS40aDAuNGMwLjIsMCwwLjUsMCwwLjgsMGMyNywwLjYsNzIuOSwxMS42LDc2LDc5LjQgICAgYzAsMC4zLDAsMC42LDAuMSwwLjhjMC4xLDAuNyw3LjEsNjguNy0yNC43LDEwNC41Yy0xMi42LDE0LjItMjkuNCwyMS4yLTUxLjUsMjEuNGMtMC4yLDAtMC4zLDAtMC41LDBsMCwwYy0wLjIsMC0wLjMsMC0wLjUsMCAgICBjLTIyLTAuMi0zOC45LTcuMi01MS40LTIxLjRDMTU3LjcsMTc2LjIsMTY0LjUsMTA3LjksMTY0LjYsMTA3LjN6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTQ0Ni44LDM4My42YzAtMC4xLDAtMC4yLDAtMC4zYzAtMC44LTAuMS0xLjYtMC4xLTIuNWMtMC42LTE5LjgtMS45LTY2LjEtNDUuMy04MC45Yy0wLjMtMC4xLTAuNy0wLjItMS0wLjMgICAgYy00NS4xLTExLjUtODIuNi0zNy41LTgzLTM3LjhjLTYuMS00LjMtMTQuNS0yLjgtMTguOCwzLjNjLTQuMyw2LjEtMi44LDE0LjUsMy4zLDE4LjhjMS43LDEuMiw0MS41LDI4LjksOTEuMyw0MS43ICAgIGMyMy4zLDguMywyNS45LDMzLjIsMjYuNiw1NmMwLDAuOSwwLDEuNywwLjEsMi41YzAuMSw5LTAuNSwyMi45LTIuMSwzMC45Yy0xNi4yLDkuMi03OS43LDQxLTE3Ni4zLDQxICAgIGMtOTYuMiwwLTE2MC4xLTMxLjktMTc2LjQtNDEuMWMtMS42LTgtMi4zLTIxLjktMi4xLTMwLjljMC0wLjgsMC4xLTEuNiwwLjEtMi41YzAuNy0yMi44LDMuMy00Ny43LDI2LjYtNTYgICAgYzQ5LjgtMTIuOCw4OS42LTQwLjYsOTEuMy00MS43YzYuMS00LjMsNy42LTEyLjcsMy4zLTE4LjhjLTQuMy02LjEtMTIuNy03LjYtMTguOC0zLjNjLTAuNCwwLjMtMzcuNywyNi4zLTgzLDM3LjggICAgYy0wLjQsMC4xLTAuNywwLjItMSwwLjNjLTQzLjQsMTQuOS00NC43LDYxLjItNDUuMyw4MC45YzAsMC45LDAsMS43LTAuMSwyLjVjMCwwLjEsMCwwLjIsMCwwLjNjLTAuMSw1LjItMC4yLDMxLjksNS4xLDQ1LjMgICAgYzEsMi42LDIuOCw0LjgsNS4yLDYuM2MzLDIsNzQuOSw0Ny44LDE5NS4yLDQ3LjhzMTkyLjItNDUuOSwxOTUuMi00Ny44YzIuMy0xLjUsNC4yLTMuNyw1LjItNi4zICAgIEM0NDcsNDE1LjUsNDQ2LjksMzg4LjgsNDQ2LjgsMzgzLjZ6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==";

const userIconStyle: object = {
    opacity: "0.1",
    padding: "8px 15px",
    width: "80%"
}

const peerStyle: object = {
    display: "inline-block",
    width: 150,
    backgroundColor: "white",
    marginTop: 40,
    marginLeft: 40,
    borderRadius: 8,
    boxShadow: "4px 4px 5px 0px rgba(0,0,0,0.75);"
}

const peerNameStyle: object = {
    display: "block",
    color: "#EB0000",
    textAlign: "center",
    width: 150,
    backgroundColor: "#C4C4C4",
    fontSize: 20,
    lineHeight: "30px"
}

interface IPeerDisplayProps { peer: Peer }

export class PeerDisplay extends React.PureComponent<IPeerDisplayProps, undefined> {
    render() {
        return <div style={peerStyle}>
            <img style={userIconStyle} src={userIcon} /> 
            <span style={peerNameStyle}>{this.props.peer ? this.props.peer.displayName : ""}</span>
        </div>
    }
}