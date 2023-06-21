import { Component,OnInit } from '@angular/core';
import { MarvellousService } from '../marvellous.service';

@Component({
  selector: 'app-batchdlist',
  templateUrl: './batchdlist.component.html',
  styleUrls: ['./batchdlist.component.css']
})
export class BatchdlistComponent implements OnInit 
{
  public Batches : any = []
  constructor(public obj : MarvellousService) {}

  ngOnInit()
  {
    return this.obj.GetBatchDetails().subscribe(data=>this.Batches=data);
  }

}
