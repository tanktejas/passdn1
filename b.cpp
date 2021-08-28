#include <bits/stdc++.h>
using namespace std;
void setZeroes(vector<vector<int>> &m)
{
    vector<int> col(m[0].size(), 0);
    if (m.size() == 1 and m[0].size() == 1)
    {
        return;
    }

    bool flag = 0;
    for (int i = 0; i < m.size(); i++)
    {
        bool prev = flag;
        flag = 0;

        for (int j = 0; j < m[0].size(); j++)
        {
            if (prev)
            {
                m[i - 1][j] = 0;
            }
            if (m[i][j] == 0)
            {
                if (col[j] == 1)
                {
                    continue;
                }
                else
                {
                    flag = 1;
                    col[j] = 1;
                    for (int k = 0; k < m.size(); k++)
                    {
                        m[k][j] = 0;
                    }
                }
            }
        }
    }
    if (flag)
    {
        for (int i = 0; i < m[i].size(); i++)
        {
            cout << j;
            m[m.size() - 1][i] = 0;
        }
    }
}
int main()
{
    vector<vector<int>> m = {{1, 0}};
    setZeroes(m);
}