import { Book } from './../models/Book';

export class BooksService {
booksList: Book[] = [
    {
      name: 'Les Thanatonautes',
      description: [
        'Auteur: Bernard Werber',
        'Sortie: 1994',
        'Résumé: L\'homme a tout exploré: le monde de l\'espace, le monde sousmarin, le monde souterrain; pourtant il lui manque la connaissance d\'un monde: le continent des morts. Voilà la prochaine frontière...'
      ],
      isLend: false
    },
    {
      name: 'Depuis l\'au-delà',
      description: [
        'Auteur: Bernard Werber',
        'Sortie: 1987',
        'Résumé: Je me nomme Gabriel Wells. Je suis écrivain de romans à suspens. Ma nouvelle enquête est un peu particulière car elle concerne le meurtre de quelqu’un que je connais personnellement : Moi-même. J’ai été tué dans la nuit et je me demande bien par qui. Pour résoudre cette énigme j’ai eu la chance de rencontrer Lucy Filipini. En tant que médium professionnelle, elle parle tous les jours aux âmes des défunts. Et c’est ensemble, elle dans le monde matériel, moi dans le monde invisible, que nous allons tenter de percer le mystère de ma mort.'
      ],
      isLend: false
    },
    {
      name: 'L\'Empire des anges',
      description: [
        'Auteur: Bernard Werber',
        'Sortie: 2000',
        'Résumé: Que pensent les anges de nous ? Que peuvent-ils faire pour nous aider ? Qu\'attendent-ils de l\'humanité en général ? Lorsque Michael Pinson (stupidement tué dans un accident d\'avion percutant un immeuble) a passé avec succès l\'épreuve de la « pesée des âmes », il a accédé au royaume des anges. Mais passé le premier émerveillement, il découvre l\'ampleur de la tâche...'
      ],
      isLend: false
    }
  ];
}