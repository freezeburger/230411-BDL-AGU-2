import { BehaviorSubject } from "rxjs";

export interface ReactiveService<DataType, CommandType> {

  data$ : BehaviorSubject<DataType>;

  execute(command:CommandType, payload:any):void;

}
