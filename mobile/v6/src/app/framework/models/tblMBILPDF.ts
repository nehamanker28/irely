export class tblMBILPDF {
  intPDFId: number;
  strFileName: string;
  intShiftId:number;
  dtShiftDate:Date;
  intDriverId:number;
  strFileType: string;
  public mapping: Object = {
      intPDFId: 'pk',
      strFileName: 'string',
      intShiftId:'number',
      dtShiftDate:'date',
      intDriverId:'number',
      strFileType:'string',

  }

  public tablename:string = 'tblMBILPDF';
}
