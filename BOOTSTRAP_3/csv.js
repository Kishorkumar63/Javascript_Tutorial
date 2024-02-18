class csvexpo{
    constructor(table,header=true)
    {
       this.table=table;
       
      
this.rows = Array.from(table.querySelectorAll("tr"));
if(!header && this.rows[0].querySelectorAll("th").length )

{
this.rows.shift();
}
//console.log(this. _longest());


    }

    exportcsv()
    {
      const lines=[];
      const ncols=this. _longest();
      for(const row of this.rows)
          {       
      }
    }
  _longest()
  {

    return this.rows.reduce((length,row)=>(
      row.chiderElement>length ? row.chiderElement:length
    ),0)
  }  
}
const btn=document.querySelector("button");
const tableElement=document.querySelector("#table")
btn.addEventListener("click",()=>{

    
    const obj=new csvexpo(tableElement);
    obj.exportcsv();
})
