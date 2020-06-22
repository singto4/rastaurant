export class BillStatus {
    id: number;
    bill: string;
    status: string;
    time: string;
    update_time: string;
}

export class BillStatusList {
    billstatus: BillStatus[];
}
