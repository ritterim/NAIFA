@echo Off
pushd %~dp0
setlocal

call gem install bundler --no-ri --no-rdoc
call bundle install
call explorer "http://localhost:4000"
call bundle exec jekyll serve --incremental
