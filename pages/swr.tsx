import { StudentDetail } from '@/components/swr';
import * as React from 'react';

export default function App() {
    return (
        <div>
            <h1>SWR Play</h1>
            <ul>
                <li>
                    <StudentDetail studentId="lea11ziflg8xoiza" />
                </li>
                <li>
                    <StudentDetail studentId="lea11ziflg8xoiza" />
                </li>
                <li>
                    <StudentDetail studentId="lea11ziflg8xoiza" />
                </li>
            </ul>
        </div>
    );
}
