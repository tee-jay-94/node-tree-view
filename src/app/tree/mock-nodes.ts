import { TreeNode } from './tree-node';

export const NODES: TreeNode[] = [
    {
        name: "india",
        showValue: false,
        values: [
            {
                name: "zones",
                showValue: false,
                values: [
                    {
                        name: "north",
                        showValue: false,
                        values: [
                            {
                                name: "states",
                                showValue: false,
                                values: [
                                    {
                                        name: "punjab",
                                        showValue: false,
                                        values: [
                                            {
                                                name: "population",
                                                values: "28000000"
                                            }
                                        ]
                                    },
                                    {
                                        name: "J&K",
                                        showValue: false,
                                        values: [
                                            {
                                                name: "population",
                                                values: "1000000"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "south",
                        showValue: false,
                        values: [
                            {
                                name: "states",
                                showValue: false,
                                values: [
                                    {
                                        name: "tamil nadu",
                                        showValue: false,
                                        values: [
                                            {
                                                name: "population",
                                                values: "67000000"
                                            }
                                        ]
                                    },
                                    {
                                        name: "kerala",
                                        showValue: false,
                                        values: [
                                            {
                                                name: "population",
                                                values: "34000000"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
