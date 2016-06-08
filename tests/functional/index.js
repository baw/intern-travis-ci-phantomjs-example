define([
	'intern!tdd',
    'intern/chai!assert',
    'require'
], function (
    tdd,
    assert,
    require
) {
    tdd.suite('index.html', function () {
        tdd.test('has correct title', function () {
            return this.remote
                .get(require.toUrl('../../index.html'))
                .getPageTitle()
                    .then(function (text) {
                        assert.equal(text, 'Intern Test');
                    });
        });
    });
});
