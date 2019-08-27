import { Cd } from '../models/Cd';

export class CdsServices {
    cdList: Cd[] = [
        {
          name: 'Thriller',
          description: [
            'Chanteur: Michael Jackson',
            'Sortie: 1982'
          ],
          isLend: false
        },
        {
          name: 'Bad',
          description: [
            'Chanteur: Michael Jackson',
            'Sortie: 1987'
          ],
          isLend: false
        },
        {
          name: 'Dangerous',
          description: [
            'Chanteur: Michael Jackson',
            'Sortie: 1991'
          ],
          isLend: false
        }
      ];
}