import { OutputTarget } from '../Summary';
import fs from 'fs';

export class HTMLOutput implements OutputTarget {
    print(report: string): void {
        const html = `<div>
            <h1>Analisis output</h1>
            <p>${report}</p>
        </div>`;

        fs.writeFileSync('report.html', html);
    }
}