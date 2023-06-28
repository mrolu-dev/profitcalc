# profitcalc
Web application for drop shipping calculations
/* https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-red-hat/
Install MongoDB Community Edition
Follow these steps to install MongoDB Community Edition using the yum package manager.

1.Configure the package management system (yum).
Create a /etc/yum.repos.d/mongodb-org-6.0.repo file so that you can install MongoDB directly using yum:

//script below
[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
//end of script

You can also download the .rpm files directly from the 
MongoDB repository
. Downloads are organized by Red Hat / CentOS version (e.g. 7), then MongoDB release version (e.g. 6.0), then architecture (e.g. x86_64).

Prior to MongoDB 5.0, odd-numbered MongoDB release versions, such as 4.3, were development releases. Beginning with MongoDB 5.1, MongoDB has quarterly rapid releases. For more information on the differences between rapid and long-term support releases, see MongoDB Versioning.

2. Install the MongoDB packages.
To install the latest stable version of MongoDB, issue the following command:

sudo yum install -y mongodb-org

Alternatively, to install a specific release of MongoDB, specify each component package individually and append the version number to the package name, as in the following example:

sudo yum install -y mongodb-org-6.0.4 mongodb-org-database-6.0.4 mongodb-org-server-6.0.4 mongodb-org-mongos-6.0.4 mongodb-org-tools-6.0.4

You can specify any available version of MongoDB. However yum upgrades the packages when a newer version becomes available. To prevent unintended upgrades, pin the package. To pin a package, add the following exclude directive to your /etc/yum.conf file:

exclude=mongodb-org,mongodb-org-database,mongodb-org-server,mongodb-mongosh,mongodb-org-mongos,mongodb-org-tools

Run MongoDB Community Edition
To Use Default Directories
By default, MongoDB runs using the mongod user account and uses the following default directories:

/var/lib/mongo (the data directory)

/var/log/mongodb (the log directory)

The package manager creates the default directories during installation. The owner and group name are mongod.

Procedure
Follow these steps to run MongoDB Community Edition on your system. These instructions assume that you are using the default settings.

Init System

To run and manage your mongod process, you will be using your operating system's built-in init system. Recent versions of Linux tend to use systemd (which uses the systemctl command), while older versions of Linux tend to use System V init (which uses the service command).

If you are unsure which init system your platform uses, run the following command:

ps --no-headers -o comm 1

Then select the appropriate tab below based on the result:

systemd - select the systemd (systemctl) tab below.

init - select the System V Init (service) tab below.



systemd (systemctl)

System V Init (service)
1
Start MongoDB.
You can start the mongod process by issuing the following command:

sudo systemctl start mongod

If you receive an error similar to the following when starting mongod:

Failed to start mongod.service: Unit mongod.service not found.

Run the following command first:

sudo systemctl daemon-reload

Then run the start command above again.

2
Verify that MongoDB has started successfully.
You can verify that the mongod process has started successfully by issuing the following command:

sudo systemctl status mongod

You can optionally ensure that MongoDB will start following a system reboot by issuing the following command:

sudo systemctl enable mongod

3
Stop MongoDB.
As needed, you can stop the mongod process by issuing the following command:

sudo systemctl stop mongod

4
Restart MongoDB.
You can restart the mongod process by issuing the following command:

sudo systemctl restart mongod

You can follow the state of the process for errors or important messages by watching the output in the /var/log/mongodb/mongod.log file.

5
Begin using MongoDB.
Start a 
mongosh
 session on the same host machine as the mongod. You can run 
mongosh
 without any command-line options to connect to a mongod that is running on your localhost with default port 27017.

mongosh
*/
