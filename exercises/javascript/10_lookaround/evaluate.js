import {
  commandsRegex,
  nameRegex,
  metaTagRegex,
  wordBeforeSemiRegex,
  nonPyfileRegex,
} from '.';
describe('EvaluateCommandsRegex', function () {
  it('matches instructions example', function () {
    const sampleCapture =
      'udemy-regex git:(master) $ cd exercises\nexercises git:(master) $ ls\njs     python\nexercises git:(master) $ cd python\npython git:(master) $ ls\n1_characters_and_quantities 5_flags                     9_lookaround\n2_collections_and_ranges    6_greedy_vs_lazy            run_tests.sh\n3_whitespace_and_boundaries 7_groups\n4_character_categories      8_substitution\npython git:(master) $ cd 9_lookaround\n9_lookaround git:(master) $ ls\n__pycache__ evaluate.py\n9_lookaround git:(master) $ touch lookaround.py';
    const matches = sampleCapture.match(commandsRegex);
    expect(matches).toEqual([
      'cd exercises',
      'ls',
      'cd python',
      'ls',
      'cd 9_lookaround',
      'ls',
      'touch lookaround.py',
    ]);
  });
});

describe('NameRegex', function () {
  it('matches instructions example', function () {
    const sampleFile =
      'Name: Nanny McPhee\nEmail: nanny.mcphee@notarealdomain.com\n\nName: Muhammad Ali\nEmail: muhammad.ali@notarealemaildomain.com';
    const matches = sampleFile.match(nameRegex);
    expect(matches).toEqual(['Nanny McPhee', 'Muhammad Ali']);
  });
});
describe('EvaluateMetaTagRegex', function () {
  it('matches instructions example', function () {
    const sampleTags = 'a_tag, meta__another_tag, meta__third_tag, fourth_tag';
    const matches = sampleTags.match(metaTagRegex);
    expect(matches).toEqual(['another_tag', 'third_tag']);
  });
});
describe('EvaluteWordBeforeSemicolonRegex', function () {
  it('matches single word before semicolon', function () {
    const sampleString =
      "I love the semicolon; it's unnecessary, but graceful and sophtisticated";
    const matches = sampleString.match(wordBeforeSemiRegex);
    expect(matches).toEqual(['semicolon']);
  });
  it('matches many words before semicolons', function () {
    const sampleString =
      'He was bald, or mostly bald – a crop of white stubble gilded his ears – and gave off an air of pent-up energy, of emotions kept in check; the same sense Lamb had had watching the video of him, shot eighteen years ago, through a two-way mirror in one of Regent’s Park’s luxury suites. Joke. These were underground, and were where the Service’s more serious debriefings took place; those which it might later prove politic to deny had happened.';
    const matches = sampleString.match(wordBeforeSemiRegex);
    expect(matches).toEqual(['check', 'place']);
  });
  it('matches words before semicolons in multi-line string', function () {
    const sampleString =
      "Mabel the Cat had made a big pot of goulash; it was simmering on the stove.\n\nGoulash was Harry the Dog's favorite; the scent drew him to the kitchen.\n\nAs Mabel]'s culinary efforts continued, with bread baking in the oven and a cabbage dish just begun, she admonished Harry to keep out of her way; but Harry's ability to remain at a decent distance from the stove was severely challenged.\n\nMabel did not take kindly to the encroachment of Harry into her personal cooking space; indeed, she at one point responded to the sudden appearance of his muzzle at her elbow with a distinct and species-appropriate hiss.\n\nHarry was an animal driven by primal need to gain immediate access to the goulash; his options for achieving that aim were, however, limited.\n\nMabel's cooking prowess, honed through years of complex feasts, was formidable; the interruption of its application ill-advised.\n\nThe scent of the baking bread was sublime, the perfume of the goulash intoxicating.\n\nOn one important point Harry and Mabel agreed; that is, it would be better for all if Harry found somewhere else to be while Mabel finished cooking.";
    const matches = sampleString.match(wordBeforeSemiRegex);
    expect(matches).toEqual([
      'goulash',
      'favorite',
      'way',
      'space',
      'goulash',
      'formidable',
      'agreed',
    ]);
  });
});
describe('EvaluteNonPyfileRegex', function () {
  it('matches instructions example', function () {
    const sampleFiles = 'happy.js\nhappy.py\nsad.sh\nsad.py\npyrite.go';
    const matches = sampleFiles.match(nonPyfileRegex);
    expect(matches).toEqual(['happy.js', 'pyrite.go']);
  });
});
