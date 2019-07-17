import React from "react";
import {useQuery} from "graphql-hooks";

export function databaseMenuItem() {
    const [menuItem, setMenuItem] = React.useState([]);
    const HOMEPAGE_QUERY = `query allDatabaseApps {
                            apps: allDatabaseApps(orderBy: ID_ASC , condition: { parent : null } ) {
                                result: nodes {
                                  id
                                  icon
                                  title
                                  description
                                  color
                                  
                                  children: databaseAppsByParent(orderBy: ID_ASC) {
                                    result: nodes {
                                      id
                                      icon
                                      color
                                      title
                                      description
                                    }
                                  }
                                }
                              }
                            }
                            `;

    const {loading, error, data} = useQuery(HOMEPAGE_QUERY, {});
}
