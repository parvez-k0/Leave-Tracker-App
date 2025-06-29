import { LightningElement } from 'lwc';
import MyLeaves from 'c/myLeaves';


export default class LeaveTracker extends LightningElement {

    refreshLeaveRequestHandler(event){
        this.refs.myLeavesComp.refreshGrid();
    }
}