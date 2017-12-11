﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Store.Models
{
    public class User
    { 
        [Key]
        [Column("id")]
        public int ID { get; set; }

        [ForeignKey("order_id")]
        [Column("order_id")]
        public int OrderId { get; set; }

        [Column("first_name")]
        public string FirstName { get; set; }

        [Column("last_name")]
        public string LastName { get; set;  }

        /// <summary>
        /// For tracking concurrency. The timestap attribute specifies that the column is included in the where clause of the update and delete commands
        /// Read more [https://docs.microsoft.com/en-us/aspnet/core/data/ef-rp/concurrency#handling-concurrency]
        /// </summary>
        [Timestamp]
        public byte[] RowNumber { get; set; }

        /// <summary>
        /// A naviagation property. It holds all the orders entities associated to the given user.
        /// A User and Order have one-to-many relationship. 
        ///
        /// When specified by ICollection as opposed to List Entity framework creates a Hashset collection by default.
        /// </summary>
       /// public virtual ICollection<Order> Orders { get; set; }
    }
}