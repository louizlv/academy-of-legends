export interface apiInvocador{
    data: string;

    invocador: Invocador[];

}

export interface Invocador{
    id : string;
    acount_id : string;
    nome : string;
    profileIconId: number;
    summonerLevel : string;
    revisionDate : number;
}
