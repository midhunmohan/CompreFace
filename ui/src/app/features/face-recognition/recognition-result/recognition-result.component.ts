import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Model } from '../../../data/model';

@Component({
  selector: 'app-recognition-result',
  templateUrl: './recognition-result.component.html',
  styleUrls: ['./recognition-result.component.scss']
})
export class RecognitionResultComponent implements OnInit {
  @Input() printData: object;
  @Input() pending = true;
  @Input() model: Model;
  @Input() file: File;

  @ViewChild('canvasElement', { static: true }) myCanvas: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  /*
   * Print the result of recognition.
   *
   * @param box Box
   * @param face Face
   */
  printResult(box: any, face: any) {
    const img = new Image();
    const ctx: CanvasRenderingContext2D =
      this.myCanvas.nativeElement.getContext('2d');
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      ctx.beginPath();
      ctx.strokeStyle = 'green';
      ctx.moveTo(box.x_min, box.y_min);
      ctx.lineTo(box.x_max, box.y_min);
      ctx.lineTo(box.x_max, box.y_max);
      ctx.lineTo(box.x_min, box.y_max);
      ctx.lineTo(box.x_min, box.y_min);
      ctx.stroke();
      ctx.fillStyle = 'green';
      ctx.fillRect(box.x_min, box.y_min - 25, 200, 25);
      ctx.fillRect(box.x_min, box.y_max, 200, 25);
      ctx.fillStyle = 'white';
      ctx.font = '20pt Roboto Regular Helvetica Neue sans-serif';
      ctx.fillText(box.probability, box.x_min + 10, box.y_max + 20);
      ctx.fillText(face[0].face_name, box.x_min + 10, box.y_min - 5);
    };
    img.src = URL.createObjectURL(this.file);
  }
}
