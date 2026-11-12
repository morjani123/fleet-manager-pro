export type Vehicle={id:string;plate:string;name:string;brand:string;type:'Camion'|'Voiture'|'Engin'|'Utilitaire';status:'En service'|'Maintenance'|'Disponible';km:number;year:number;driver:string;nextService:string};
export type Maintenance={id:string;vehicleId:string;title:string;date:string;cost:number;status:'Planifiée'|'Terminée'};
export type Fuel={id:string;vehicleId:string;date:string;liters:number;amount:number};
export const initialVehicles:Vehicle[]=[
{id:'v1',plate:'12345-A-6',name:'Mercedes Actros 1845',brand:'Mercedes-Benz',type:'Camion',status:'En service',km:182450,year:2021,driver:'Youssef Amrani',nextService:'2026-12-05'},
{id:'v2',plate:'56789-B-7',name:'Renault Master',brand:'Renault',type:'Utilitaire',status:'Disponible',km:78300,year:2022,driver:'Hamza Idrissi',nextService:'2026-12-18'},
{id:'v3',plate:'24680-C-6',name:'Caterpillar 320',brand:'Caterpillar',type:'Engin',status:'Maintenance',km:6240,year:2020,driver:'Rachid Bennani',nextService:'2026-11-20'},
{id:'v4',plate:'13579-D-8',name:'Dacia Duster',brand:'Dacia',type:'Voiture',status:'En service',km:41280,year:2023,driver:'Sara El Fassi',nextService:'2027-01-10'},
{id:'v5',plate:'97531-E-6',name:'Volvo FH 500',brand:'Volvo',type:'Camion',status:'En service',km:220180,year:2019,driver:'Karim Alaoui',nextService:'2026-11-29'},
{id:'v6',plate:'86420-F-7',name:'Toyota Hilux',brand:'Toyota',type:'Utilitaire',status:'Disponible',km:99850,year:2021,driver:'Non affecté',nextService:'2026-12-28'}];
export const initialMaintenance:Maintenance[]=[{id:'m1',vehicleId:'v3',title:'Révision hydraulique',date:'2026-11-20',cost:3800,status:'Planifiée'},{id:'m2',vehicleId:'v5',title:'Vidange + filtres',date:'2026-11-29',cost:1450,status:'Planifiée'},{id:'m3',vehicleId:'v1',title:'Contrôle freinage',date:'2026-10-24',cost:2200,status:'Terminée'}];
export const initialFuel:Fuel[]=[{id:'f1',vehicleId:'v1',date:'2026-11-04',liters:240,amount:3072},{id:'f2',vehicleId:'v5',date:'2026-11-06',liters:310,amount:3968},{id:'f3',vehicleId:'v2',date:'2026-11-08',liters:65,amount:832},{id:'f4',vehicleId:'v4',date:'2026-11-10',liters:42,amount:538}];
export const money=(n:number)=>new Intl.NumberFormat('fr-MA',{maximumFractionDigits:0}).format(n)+' DH';
