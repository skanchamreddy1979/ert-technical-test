using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ERT.Entities
{
    public class PaginatedList<T> : List<T>
    {
        public int PageIndex { get; private set; }
        public int LastPageIndex { get; private set; }
        [BindProperty(SupportsGet = true)]
        public int PageSize { get; set; } = 10;

        [BindProperty(SupportsGet = true)]
        public int CurrentPage { get; set; } = 1;
        public bool ShowFirst => CurrentPage != 1 ;
        public bool ShowPrevious => CurrentPage > 1 ;
        public bool ShowNext => CurrentPage < LastPageIndex && PageSize >= 10 ;
        public bool ShowLast => CurrentPage != LastPageIndex && PageSize >= 10 ;
        public PaginatedList(List<T> items, int count, int pageIndex, int lastPageIndex)
        {   if(items.ToList().Count>0)
            {
                CurrentPage = pageIndex; PageSize = count;
            }
            
            LastPageIndex = lastPageIndex;           
            this.AddRange(items);
        } 

        public static PaginatedList<T> CreateAsync(IEnumerable<T> source, int pageIndex, int lastPageIndex = 0) 
        {
            var count =  source.Count();
            var items = source.ToList();
            return new PaginatedList<T>(items, count, pageIndex, lastPageIndex);

        }
    }
}
