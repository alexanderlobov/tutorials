This is a basic example about how to setup nginx as a balancer.
Based on [this video-tutorial](https://www.youtube.com/watch?v=FJrs0Ar9asY).

Includes Vagrant file, nginx config file and simple Express.js webapp.

Vagrant file contains [Vagrant multi-macine
configuration](https://www.vagrantup.com/docs/multi-machine/).

vagrant cheatsheet:

    # start all machines
    vagrant up

    # stop all machines, but not destroy
    vagrant halt

    # destroy all machines
    vagrant destroy

    # ssh to selected machine
    vagrant ssh <name>

    # for example
    vagrant ssh balancer

To run performance tests install Apache Bench, and

    ab -c 40 -n 1000 http://192.168.33.10

Installing Apache bench on mac

   brew tap homebrew/apache
   brew install ab
