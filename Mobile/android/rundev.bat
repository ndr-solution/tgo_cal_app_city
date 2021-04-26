cd ../../AngularJs
::git checkout master
call grunt clean
call grunt build
cd ../Mobile/android/www
rd /s /q .
cd ../../../AngularJs
xcopy /s /e export\*.*  ..\Mobile\android\www
cd ../Mobile/android
call cordova prepare android
call cordova run android
