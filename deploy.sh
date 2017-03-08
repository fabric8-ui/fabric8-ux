set -o errexit -o nounset

if [ "$TRAVIS_BRANCH" != "master" ]
then
    echo "This commit was made against $TRAVIS_BRANCH and not the master. This will not deploy."
    exit 0
fi

rev=$(git rev-parse --short HEAD)

cd _site

git init
git config user.name "Adam Jolicoeur"
git config user.email "adam.jolicoeur@gmail.com"

git remote add upstream "https://$GH_TOKEN@github.com/mindreeper2420/fabric8-ux.git"
git fetch upstream
git reset upstream/gh-pages

echo "fabric8-ux" > CNAME

touch .

git add -A
git commit -m "rebuild pages at ${rev}"
git push -q upstream HEAD:gh-pages