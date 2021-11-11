# Capstone Frontend - bootcamp neuefische.de

## Description

## Badges

Sonar Cloud

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=romsenkabomsen_capstone-frontend&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=romsenkabomsen_capstone-frontend)

## Development Protocol

### 01.11.2021

- created project and rolled out heroku ci using https://github.com/mars/create-react-app-buildpack#user-content-continue-development
- changed project language to typescript
- introduced prettier
- dependencies: @types/node, @types/react, @types/react-dom, @mui/material, typescript, react, react-dom, react-scripts, react-icons, react-router-dom, axios, styled-components
- devDependencies: prettier
- add sonar code review workflow
- add workflow to test build and deployment on pull request

<plugin>
                <groupId>org.jacoco</groupId>
                <artifactId>jacoco-maven-plugin</artifactId>
                <version>0.8.7</version>
                <executions>
                    <execution>
                        <goals>
                            <goal>prepare-agent</goal>
                        </goals>
                    </execution>
                    <execution>
                        <id>report</id>
                        <phase>test</phase>
                        <goals>
                            <goal>report</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>


