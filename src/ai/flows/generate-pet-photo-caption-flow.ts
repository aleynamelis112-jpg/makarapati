'use server';
/**
 * @fileOverview A Genkit flow for generating creative and humorous Turkish captions for pet photos.
 *
 * - generatePetPhotoCaption - A function that handles the caption generation process.
 * - GeneratePetPhotoCaptionInput - The input type for the generatePetPhotoCaption function.
 * - GeneratePetPhotoCaptionOutput - The return type for the generatePetPhotoCaption function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePetPhotoCaptionInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a pet, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  photoDescription: z
    .string()
    .optional()
    .describe('An optional description of the pet photo provided by the user.'),
});
export type GeneratePetPhotoCaptionInput = z.infer<
  typeof GeneratePetPhotoCaptionInputSchema
>;

const GeneratePetPhotoCaptionOutputSchema = z.object({
  captions: z
    .array(z.string())
    .describe('An array of creative and humorous Turkish captions for the pet photo.'),
});
export type GeneratePetPhotoCaptionOutput = z.infer<
  typeof GeneratePetPhotoCaptionOutputSchema
>;

export async function generatePetPhotoCaption(
  input: GeneratePetPhotoCaptionInput
): Promise<GeneratePetPhotoCaptionOutput> {
  return generatePetPhotoCaptionFlow(input);
}

const generatePetPhotoCaptionPrompt = ai.definePrompt({
  name: 'generatePetPhotoCaptionPrompt',
  input: {schema: GeneratePetPhotoCaptionInputSchema},
  output: {schema: GeneratePetPhotoCaptionOutputSchema},
  prompt: `Sen, evcil hayvan fotoğrafları için yaratıcı ve esprili Türkçe altyazılar üreten bir yapay zeka asistanısın.

Amacın, verilen evcil hayvan fotoğrafını analiz ederek ve isteğe bağlı açıklamayı dikkate alarak, kullanıcının gönderisine uygun, ilgi çekici ve mizahi Türkçe altyazılar üretmek.

Lütfen 3 ila 5 adet çeşitli ve özgün altyazı önerisi sun.

Evcil hayvan fotoğrafının içeriği:
Fotoğraf: {{media url=photoDataUri}}

{{#if photoDescription}}
Ek bilgi: {{{photoDescription}}}
{{/if}}

Altyazıları belirlerken yaratıcı, komik ve Türkçe diline uygun olmaya özen göster. Output şemasında belirtilen formatı kullanarak altyazıları bir JSON dizisi olarak döndür.
`,
});

const generatePetPhotoCaptionFlow = ai.defineFlow(
  {
    name: 'generatePetPhotoCaptionFlow',
    inputSchema: GeneratePetPhotoCaptionInputSchema,
    outputSchema: GeneratePetPhotoCaptionOutputSchema,
  },
  async (input) => {
    const {output} = await generatePetPhotoCaptionPrompt(input);
    return output!;
  }
);
