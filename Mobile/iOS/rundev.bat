cd ../../AngularJs
::git checkout master
call grunt clean
call grunt build
cd ../Mobile/iOS/www
rd /s /q .
cd ../../../AngularJs
xcopy /s /e export\*.*  ..\Mobile\iOS\www
cd ../Mobile/iOS
::call cordova prepare iOS
::call cordova run iOS
