export class Shop{
    constructor(timeTable, localName, zone, adress, managerName, state, phone, description, aDate) {
        description != null ? this.description = description : this.description = ``;
        timeTable != null ? this.timeTable = timeTable : this.timeTable = ``;
        localName != null ? this.localName = localName : this.localName = ``;
        zone != null && zone.length > 0 ? this.zone = zone : this.zone = `0`;
        managerName != null ? this.managerName = managerName : this.managerName =  ``;
        state != null ? this.state = state : this.state = ``;
        aDate != null ? this.aDate = aDate : this.aDate = new Date().toISOString().slice(0, 10);
        
        this.adress = adress;
        phone != null ? this.phone = phone : this.phone =  [];
    };
}