// tests generated automatically using `jsdoctest -s` https://www.npmjs.com/package/jsdoctest
require('should');
const regex = require('../8_capture_groups');

describe('extractFilenameForCertainImageFilesNoncatpureExtension()', function () {
  it("extractFilenameForCertainImageFilesNoncatpureExtension('cuteKittens.pdf')", function () {
    regex
      .extractFilenameForCertainImageFilesNoncatpureExtension('cuteKittens.pdf')
      .should.eql('cuteKittens');
  });
  it("extractFilenameForCertainImageFilesNoncatpureExtension('adorablePuppies.jpg')", function () {
    regex
      .extractFilenameForCertainImageFilesNoncatpureExtension(
        'adorablePuppies.jpg'
      )
      .should.eql('adorablePuppies');
  });
  it("extractFilenameForCertainImageFilesNoncatpureExtension('lots-of-toasters.png')", function () {
    regex
      .extractFilenameForCertainImageFilesNoncatpureExtension(
        'lots-of-toasters.png'
      )
      .should.eql('lots-of-toasters');
  });
  it("extractFilenameForCertainImageFilesNoncatpureExtension('greedyVsLazy.py')", function () {
    if (
      regex.extractFilenameForCertainImageFilesNoncatpureExtension(
        'greedyVsLazy.py'
      ) !== null
    ) {
      throw 'should have been null';
    }
  });
});
describe('findAllOuterHtmlElements()', function () {
  it("findAllOuterHtmlElements('<span>Regular expressions are the <b>best</b></span>')", function () {
    regex
      .findAllOuterHtmlElements(
        '<span>Regular expressions are the <b>best</b></span>'
      )
      .should.eql(['<span>Regular expressions are the <b>best</b></span>']);
  });
  it('findAllOuterHtmlElements("<span>I\'m a span!</span><span>I\'m another span!</span>")', function () {
    regex
      .findAllOuterHtmlElements(
        "<span>I'm a span!</span><span>I'm another span!</span>"
      )
      .should.eql([
        "<span>I'm a span!</span>",
        "<span>I'm another span!</span>",
      ]);
  });
  describe('findRootnameAndExtensionForCertainImageFiles()', function () {
    it("findRootnameAndExtensionForCertainImageFiles('cute_kittens.pdf')", function () {
      const match = regex.findRootnameAndExtensionForCertainImageFiles(
        'cute_kittens.pdf'
      );
      match.rootname.should.eql('cute_kittens');
      match.extension.should.eql('pdf');
    });
    it("findRootnameAndExtensionForCertainImageFiles('adorable_puppies.jpg')", function () {
      const match = regex.findRootnameAndExtensionForCertainImageFiles(
        'adorable_puppies.jpg'
      );
      match.rootname.should.eql('adorable_puppies');
      match.extension.should.eql('jpg');
    });
    it("findRootnameAndExtensionForCertainImageFiles('lots-of-toasters.png')", function () {
      const match = regex.findRootnameAndExtensionForCertainImageFiles(
        'lots-of-toasters.png'
      );
      match.rootname.should.eql('lots-of-toasters');
      match.extension.should.eql('png');
    });
    it("findRootnameAndExtensionForCertainImageFiles('greedy_vs_lazy.py')", function () {
      if (
        regex.findRootnameAndExtensionForCertainImageFiles(
          'greedy_vs_lazy.py'
        ) !== null
      ) {
        throw 'should have been null';
      }
    });
  });
});
