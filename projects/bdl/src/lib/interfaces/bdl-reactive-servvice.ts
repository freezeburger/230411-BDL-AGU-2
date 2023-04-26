import { BehaviorSubject } from "rxjs";

export interface BdlReactiveService<DataType, CommandType> {

  data$ : BehaviorSubject<DataType>;

  execute(command:CommandType, payload:any):void;

}
