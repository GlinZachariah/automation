export interface Result{
    value:string;
  }

  export interface Data{
    db_dtls : string;
    db_name:string;
    db_user_name:string;
    db_pwd:string;
    db_hostname :string;
    db_port:string;
    db_ser : string;
    db_sid:string;
  }

  export interface QueryTestModel{
    dbName:string;
    queryString:string;
  }